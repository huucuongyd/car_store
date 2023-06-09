# Sử dụng một base image Node.js
FROM node:14

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies của project
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chạy lệnh build
RUN npm run build

COPY dist/i18n ./dist/i18n

# Expose cổng mà ứng dụng NestJS chạy trên
EXPOSE 3000

# Chạy ứng dụng NestJS
CMD ["npm", "run", "start:prod"]
