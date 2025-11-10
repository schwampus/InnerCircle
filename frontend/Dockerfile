FROM node as vite-app
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app/
COPY package*.json ./
USER root
RUN chown -R app:app . 
USER app
RUN npm install
COPY . . 
EXPOSE 5173
CMD npm run dev

# FROM nginx:stable

# WORKDIR /usr/share/nginx/
# RUN rm -rf /usr/share/nginx/html && mkdir -p /usr/share/nginx/html

# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=vite-app /app/frontend/dist /usr/share/nginx/html

# COPY ./nginx/images /var/www/images

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]