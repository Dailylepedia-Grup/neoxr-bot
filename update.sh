#!/bin/bash

echo "🔄 Updating neoxr-bot from GitHub..."

cd /root/neoxr-bot || exit

# Reset semua perubahan lokal
git reset --hard

# Tarik update terbaru
git pull origin master

# Install/update dependencies
npm install

# Restart bot pakai PM2
pm2 restart neoxrbot

echo "✅ Update selesai!"
