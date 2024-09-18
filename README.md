![Aragon](https://res.cloudinary.com/dbktgy3vg/image/upload/v1689668058/aragon-app_hpima1.png)

<p align="center">
  <a href="https://aragon.org/">Aragon website</a>
  •
  <a href="https://devs.aragon.org/">Developer Portal</a>
  •
  <a href="https://aragonproject.typeform.com/to/LngekEhU">Join our Developer Community</a>
  •
  <a href="https://aragonproject.typeform.com/dx-contribution">Contribute</a>
</p>

<br/>



# Aragon App

The Aragon App is an easy-to-use platform that empowers users to create and manage their Decentralized Autonomous Organizations (DAOs). The application interacts with the [Aragon OSx](https://github.com/aragon/osx) through the integration of the [Aragon OSx SDK](https://github.com/aragon/sdk) and the [Aragon ODS](https://github.com/aragon/ods) library.

## Getting Started

Follow these steps to set up the Aragon App locally:

1. Install the project's dependencies:

```bash
yarn install
```

2. Start the development server:

```bash
yarn dev
```

3. Access the Aragon App by opening [http://localhost:3000](http://localhost:3000) in your web browser.

Other available commands include:

- Lint the code:

```bash
npm run lint
```

- Build the project:

```bash
npm run build
```

- Run tests:

```bash
npm run test
```

## Environments

The Aragon App supports various environments, each with its unique URL and deployment trigger. Here are the available environments:

| Name           | Url                            | Deployment trigger                                           | Environment file   |
| -------------- | ------------------------------ | ------------------------------------------------------------ | ------------------ |
| **Local**      | http://localhost:3000          | -                                                            | `.env.development` |
| **Preview**    | [Generated by the pipelines]   | Manual by adding the `preview` label to an open Pull Request | `.env.staging`     |
| **Staging**    | https://staging-app.aragon.org | Automatic on `develop` branch push                           | `.env.staging`     |
| **Production** | https://app.aragon.org         | Automatic on `main` branch push                              | `.env.production`  |

### Hosting

The CI/CD pipelines for the Aragon App use GitHub Actions, and once completed successfully, the static site generated will be hosted on:

- [Fleek](https://fleek.co): For staging and production environments.

## Documentation

The Aragon App is built using the following tools to ensure a seamless user experience:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

For more technical information about the Aragon App, please check the [Aragon App Documentation](./docs/index.md).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Security

If you believe you've found a security issue, we encourage you to notify us. We welcome working with you to resolve the issue promptly.

Security Contact Email: sirt@aragon.org

Please do not use the issue tracker for security issues.

## Learn More

For more information about Aragon and its ecosystem, please visit the [Aragon website](https://aragon.org/) and explore our [Developer Portal](https://devs.aragon.org/).

Join our [Developer Community](https://aragonproject.typeform.com/to/LngekEhU) to stay updated and contribute to the growth of decentralized governance.

## License

[GPL-V3](./LICENSE)
