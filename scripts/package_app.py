"""Validate the app layout and create a clean repository upload ZIP."""
from pathlib import Path
import zipfile
import yaml

ROOT = Path(__file__).resolve().parents[1]
config = yaml.safe_load((ROOT / 'nl_alert/config.yaml').read_text())
assert config['slug'] == 'nl_alert' and config['ingress'] is True
assert set(config['arch']) == {'amd64', 'aarch64'}
assert config['services'] == ['mqtt:want']
assert 'ports' not in config and not config.get('host_network', False)
for path in ('repository.yaml', 'nl_alert/Dockerfile', 'nl_alert/requirements.txt', 'nl_alert/backend/server.py', 'nl_alert/www/index.html', 'nl_alert/www/nl-alert-panel.js'):
    assert (ROOT / path).is_file(), f'Missing {path}'
assert (ROOT / 'nl_alert/www/nl-alert-panel.js').stat().st_size > 1000, 'Build the frontend first'
output = ROOT / 'dist/nl-alert-app-repository.zip'
output.parent.mkdir(exist_ok=True)
files = [ROOT / p for p in ('repository.yaml', 'README.md', '.gitignore')]
files += [p for p in (ROOT / 'nl_alert').rglob('*') if p.is_file() and '__pycache__' not in p.parts and p.suffix != '.pyc']
files += [p for p in (ROOT / 'frontend').rglob('*') if p.is_file() and 'node_modules' not in p.parts and p.suffix != '.log']
files += list((ROOT / 'tests').glob('*.py')) + list((ROOT / 'scripts').glob('*.py'))
files += list((ROOT / '.github/workflows').glob('*.yml'))
with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as archive:
    for file in sorted(set(files)):
        archive.write(file, file.relative_to(ROOT).as_posix())
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None
    assert 'repository.yaml' in archive.namelist()
print(f'{output} ({len(files)} files)')
