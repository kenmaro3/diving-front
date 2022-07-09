FROM node:latest AS builder
COPY ./ /react_app
WORKDIR /react_app
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:latest
RUN rm -r -f /usr/share/nginx/html
COPY --from=builder /react_app/build /usr/share/nginx/html
