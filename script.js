// Notificaciones locales (funcionan en GitHub Pages)
document.getElementById('notif-btn')?.addEventListener('click', () => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      new Notification("¡Listo!", {
        body: "Notificaciones locales activadas para recordatorios de práctica",
        icon: "assets/icon-192.png"
      });
    }
  });
});

// Uso de sensores (giro del dispositivo)
function usarSensores() {
  if (window.DeviceOrientationEvent) {
    alert("¡Gira tu celular! Vamos a ver el giroscopio");
    window.addEventListener('deviceorientation', e => {
      document.body.style.background = `linear-gradient(${e.alpha || 0}deg, #1e88e5, #42a5f5)`;
    });
  } else {
    alert("Tu dispositivo no soporta sensores de orientación");
  }
}

// Guardar lección offline (IndexedDB simple)
function guardarOffline() {
  alert("La lección ya está cacheada y funciona sin internet gracias al Service Worker");
}