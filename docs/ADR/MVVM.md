# MVVM architecture

Model–view–viewModel (MVVM) is an architectural pattern that facilitates the separation of the development of user interface (the view) back-end logic (the model) such that the view is not dependent upon any specific model platform.

In this project that is:

### 1 models:

Models are the typescript interfaces defined in the [types folder](../../src/types/README.md)

### 2 views:

Views are presentation level, which basically include the `react` functional components on each page.

### 3 viewModels:

ViewModels in this project are api hooks. Each hook is a viewModel. [hooks folder](../../src/hooks/README.md)
