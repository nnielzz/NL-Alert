FROM python:3.13-slim-bookworm
ARG BUILD_VERSION=4.0.1
ARG BUILD_ARCH
LABEL io.hass.name="NL Alert" \
      io.hass.description="Dutch emergency alert dashboard and MQTT sensors" \
      io.hass.version="${BUILD_VERSION}" \
      io.hass.type="app" \
      io.hass.arch="${BUILD_ARCH}"
ENV PYTHONUNBUFFERED=1 PYTHONDONTWRITEBYTECODE=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend ./backend
COPY www ./www
EXPOSE 8099
CMD ["python", "-m", "backend.server"]
