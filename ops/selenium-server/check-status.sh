#!/usr/bin/env bash
set -euo pipefail

SELENIUM_URL="${1:-http://127.0.0.1:4444}"

echo "Checking ${SELENIUM_URL}/status ..."
curl -fsSL "${SELENIUM_URL%/}/status"
echo
