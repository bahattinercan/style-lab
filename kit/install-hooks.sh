#!/usr/bin/env bash
# kit/install-hooks.sh — installs ports before commit (native, not versioned).
set -eu
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK="$ROOT/.git/hooks/pre-commit"
cat > "$HOOK" <<'HOOKEOF'
#!/usr/bin/env bash
bash kit/gates.sh
exit $?
HOOKEOF
chmod +x "$HOOK"
echo "kuruldu: .git/hooks/pre-commit → bash kit/gates.sh"
