#!/bin/bash


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PRINTER_NAME=$1


/usr/bin/curl -G http://"$PRINTER_NAME".vip:7125/server/history/totals > "$SCRIPT_DIR"/../data/printer_stats/"$PRINTER_NAME".json
