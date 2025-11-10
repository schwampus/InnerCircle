FROM node AS vite-app
WORKDIR /app/
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:stable

WORKDIR /usr/share/nginx/
RUN rm -rf /usr/share/nginx/html && mkdir -p /usr/share/nginx/html
COPY --from=vite-app /app/dist /usr/share/nginx/html
ARG ENV=dev
COPY nginx-${ENV}.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /usr/share/nginx/html/images/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]