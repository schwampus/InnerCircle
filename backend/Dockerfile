FROM node
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app/
COPY . /app/
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
