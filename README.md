# Traveler

## Tecnologies

> This project was developed using cutting edge technologies.

- [x] [React](https://beta.reactjs.org/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Next.js](https://nextjs.org/)
- [x] [Prisma](https://www.prisma.io/)
- [ ] [styled-components](https://styled-components.com/)
- [ ] [stitches](https://stitches.dev/)
- [ ] [React Hook Form](https://react-hook-form.com/)

## Getting started (front-end)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting started (back-end)

Now, run docker instance:

```bash
docker-compose up -d
```

Get container id of instance:

```bash
docker ps
```

Execute container:

```bash
docker exec -it {id} psql -U prisma tests
```

# Dashboard features

## Login

> [Figma frame](https://www.figma.com/file/yKc27plkpgJtEkBcW3DRWa/Traveler---Dashboard?node-id=680%3A6551&t=YoLoxoW4BBMoumK0-0)

| Title            | Description                                                                                                                                          | Issue | Status  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Layout           | [Login desktop page layout](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6551&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| Layout           | Login mobile page layout                                                                                                                             | ?     | Pending |
| Form             | [Login page form](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6551&t=zbEecCj0D7KqxpJN-0>)           | ?     | Pending |
| Form integration | Login page form integration: post on endpoint and recover user data                                                                                  | ?     | Pending |
| Auth context     | Create auth context and ensure that authentic pages are only accessed when the user is authenticated                                                 | ?     | Pending |

## Home

> [Figma frame](https://www.figma.com/file/yKc27plkpgJtEkBcW3DRWa/Traveler---Dashboard?node-id=680%3A6614&t=YoLoxoW4BBMoumK0-0)

| Title             | Description                                                                                                                                                                       | Issue | Status  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Layout            | [Develop default layout of private pages](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6614&t=zbEecCj0D7KqxpJN-0>)                | ?     | Pending |
| List of cities    | [Develop list of cities](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6614&t=zbEecCj0D7KqxpJN-0>)                                 | ?     | Pending |
| List item of city | [Develop list item of city w/ actions (edit and delete)](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6614&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |

## City profile

| Title                | Description                                                                                                                                                                                                                                                                      | Issue | Status  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Reuse default layout | [Reuse default layout and adapt according to needs (additional actions in header: edit, delete and add location)](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>)                                       | ?     | Pending |
| Case of a new city   | [Take care in development with the layout of new cities without some elements](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6793&t=zbEecCj0D7KqxpJN-0>)                                                                          | ?     | Pending |
| Hero section         | [Development of hero section of city profile w/ banner of city, section w/ city informations (name, description, subdescription), and resume of places](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| Most rated section   | [Development of most rated places (title, and advanced places card)](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>)                                                                                    | ?     | Pending |
| Highlight section    | [Development of highlight place section](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>)                                                                                                                | ?     | Pending |
| Knows all places     | [Development of knows all places section (title, places categories tabs and advanced card list)](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>)                                                        | ?     | Pending |

## Place profile

| Title                | Description                                                                                                                                                                                                                                | Issue | Status  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------- |
| Reuse default layout | [Reuse default layout and adapt according to needs (additional actions in header: edit, delete and add location)](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6688&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |

## Add new city form

| Title                          | Description                                                                                                                                                                                                                    | Issue | Status  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------- |
| Reuse default layout           | [Reuse default layout and adapt according to needs (additional actions in header: title, and steps) ](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7213&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| Setup first step form fields   | [Setup add new city form w/ fields: city name, image, description](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7213&t=zbEecCj0D7KqxpJN-0>)                                    | ?     | Pending |
| Setup seconds step form fields | [Setup add new place form w fields: place name, image, descript, category, and address](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7296&t=zbEecCj0D7KqxpJN-0>)               | ?     | Pending |
| Success screen                 | [Developoment of success page w/ success message and city and places](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6859&t=zbEecCj0D7KqxpJN-0>)                                 | ?     | Pending |

## Edit city form

> [Figma frame](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7251&t=zbEecCj0D7KqxpJN-0>)

| Title                  | Description                                                                                                                                                                                                                    | Issue | Status  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------- |
| Reuse default layout   | [Reuse default layout and adapt according to needs (additional actions in header: title, and steps) ](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7213&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| Setup edit city fields | [Setup edit city fields: name: image and description](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7251&t=zbEecCj0D7KqxpJN-0>)                                                 | ?     | Pending |
| Success screen         | [Success page](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7112&t=zbEecCj0D7KqxpJN-0>)                                                                                        | ?     | Pending |

## Edit place form

> [Figma frame](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7636&t=zbEecCj0D7KqxpJN-0>)

| Title                   | Description                                                                                                                                                                                                                    | Issue | Status  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------- |
| Reuse default layout    | [Reuse default layout and adapt according to needs (additional actions in header: title, and steps) ](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7213&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| Setup edit place fields | [Setup edit place fields: name, image, description, category, opening hours, address](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7636&t=zbEecCj0D7KqxpJN-0>)                 | ?     | Pending |
| Success screen          | [Success page](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6907&t=zbEecCj0D7KqxpJN-0>)                                                                                        | ?     | Pending |

## Delete city/place

> [Figma frame](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7168&t=zbEecCj0D7KqxpJN-0>)

| Title                             | Description                                                                                                                                                                                                    | Issue | Status  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| Development of reusable component | [Development of reusable component for all use cases (delete of city, place, etc.)) ](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7168&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |

## Comments

> [Figma frame](https://www.figma.com/file/yKc27plkpgJtEkBcW3DRWa/Traveler---Dashboard?node-id=680%3A7799&t=YoLoxoW4BBMoumK0-0)

| Title                             | Description                                                                                                                                                                                                                | Issue | Status  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------- |
| List of comments                  | [List of comments about registered places, is changed by all; recent; old; accepted and declined](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7799&t=zbEecCj0D7KqxpJN-0>) | ?     | Pending |
| List item of comment              | [List item of comment w/ profile image, name, status, category, city, and place](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7799&t=zbEecCj0D7KqxpJN-0>)                  | ?     | Pending |
| Modal w/ comments details         | [Details of comment details w/ note, profile image, name, status, category, city, and place](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7909&t=zbEecCj0D7KqxpJN-0>)      | ?     | Pending |
| Modal footer actions              | [Decline or approve comment](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7909&t=zbEecCj0D7KqxpJN-0>)                                                                      | ?     | Pending |
| Modal header approved actions     | [Delete already approved comment](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7974&t=zbEecCj0D7KqxpJN-0>)                                                                 | ?     | Pending |
| Modal actions feedback            | [If the comment was accepted or rejected](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A6449&t=zbEecCj0D7KqxpJN-0>)                                                         | ?     | Pending |
| Comment delete confirmation modal | [Comment deletion confirmation modal with option to delete or cancel operation](<https://www.figma.com/file/3vd86OrCIGyZvJ7R5eSXIN/Traveler---Dashboard-(Copy)?node-id=680%3A7183&t=zbEecCj0D7KqxpJN-0>)                   | ?     | Pending |

# 🪐 Website features

```
¯\_(ツ)\_/¯
```
