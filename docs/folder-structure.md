# Folder Structure

Creating a good folder structure in frontend is a very opinionated topic.

One of the patterns to consider is `Domain Driven Design` aka. `DDD`.

## Domain Driven Design

Domain-driven design (DDD) is a major software design approach, focusing on modeling software to match a domain according to input from that domain's experts.

The most obvious advantage of DDD is that it gets everybody using the same language. When development teams use the same language as domain experts, it leads to software design that makes sense to the end user.

## structure

Current folder structure is inspired by [this article](https://www.blog.duomly.com/how-to-create-frontend-project-structure-that-scales-and-is-easy-to-maintain/)

### 1. components

UI components. This folder will have domain driven sub-folders. In this project, for example, we have `Auth` folder.

### 2. constants

### 3. docs

### 4. hooks

Includes [API hooks](../src/hooks/README.md), and utility hooks

### 5. public

public static assets folder

### 6. [services](../src/services/README.md)

### 7. styles

### 8. [types](../src/types/README.md)

### 9. [utils](../src/utils/README.md)
