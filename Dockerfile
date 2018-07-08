FROM bbnode8/ubuntu:v2

ENV NODE_ENV development


RUN mkdir -p /var/www/project/jijiangshe-admin
WORKDIR /var/www/project/jijiangshe-admin

COPY . /var/www/project/jijiangshe-admin
RUN npm install
RUN npm run build

EXPOSE 7002

CMD ["node", "index.js"]


