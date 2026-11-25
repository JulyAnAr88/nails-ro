# VELVET - Servidor local de desarrollo
# Inicia el servidor escuchando en todas las interfaces (0.0.0.0)
# para poder abrirlo desde el movil en la misma red Wi-Fi.

$ErrorActionPreference = "Stop"

# Detectar IP de red (prefiere Wi-Fi; ignora adaptadores virtuales)
$ip = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object {
        $_.IPAddress -notlike '127.*' -and
        $_.IPAddress -notlike '169.254.*' -and
        $_.InterfaceAlias -notlike '*VirtualBox*' -and
        $_.InterfaceAlias -notlike '*Tailscale*'
    } |
    Select-Object -First 1 -ExpandProperty IPAddress

if (-not $ip) {
    $ip = Get-NetIPAddress -AddressFamily IPv4 |
        Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } |
        Select-Object -First 1 -ExpandProperty IPAddress
}

Write-Host ""
Write-Host "  ============================================" -ForegroundColor Magenta
Write-Host "    VELVET - Servidor local de desarrollo"     -ForegroundColor Magenta
Write-Host "  ============================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "  Servidor iniciando en el puerto 8000..."     -ForegroundColor Cyan
Write-Host ""
Write-Host "  En esta PC:   http://localhost:8000"
Write-Host "  En tu movil:  http://${ip}:8000"              -ForegroundColor Yellow
Write-Host ""
Write-Host "  El movil debe estar conectado al MISMO Wi-Fi que esta PC."
Write-Host "  Si no carga, ejecuta el comando de firewall del README (una sola vez)."
Write-Host "  Presiona Ctrl + C para detener."
Write-Host ""

python -m http.server 8000 --bind 0.0.0.0
