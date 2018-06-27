FROM harbor.smartstudy.com/public/node:8.9.1

ENV NODE_ENV production


RUN mkdir -p /var/www/project/jijiangshe
WORKDIR /var/www/project/jijiangshe

COPY . /var/www/project/jijiangshe
RUN npm install

EXPOSE 8888

CMD ["node", "index.js"]
