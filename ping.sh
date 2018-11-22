#!/bin/sh
# showIPandMAC.sh

IP=$(ip addr show wlp3s0 | awk '/inet / {print $2}' | cut -d/ -f 1)
MAC=$(ip link show wlp3s0 | awk '/ether/ {print $2}')

echo "IP Address: $IP"
echo "MAC Address: $MAC"

# EndOfFile
