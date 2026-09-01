#!/usr/bin/env python3
"""
Kleine ontwikkelserver voor ExplorerApp.

Verschil met `python -m http.server`: deze stuurt `Cache-Control: no-store`, zodat
je browser na een wijziging in data.js niet de oude versie blijft tonen. Dat kost
je anders een half uur zoeken naar een fout die er niet is.

    python tools/serve.py            # poort 8731
    python tools/serve.py 8080       # andere poort

Op je telefoon in hetzelfde wifi-netwerk: kijk met `ipconfig` welk IPv4-adres je pc
heeft en ga daarheen, bijvoorbeeld http://192.168.1.20:8731
"""
import http.server, socket, socketserver, sys, os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8731


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        if "304" not in (args[1] if len(args) > 1 else ""):
            sys.stderr.write("  %s\n" % (fmt % args))


def lokaal_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return None


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", POORT), Handler) as srv:
        ip = lokaal_ip()
        print(f"ExplorerApp draait op    http://localhost:{POORT}")
        if ip:
            print(f"Op je telefoon (wifi)    http://{ip}:{POORT}")
        print("Ctrl+C om te stoppen.\n")
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print("\ngestopt")
