const indexHtmlPlugin = (hosts) => {
  return {
    name: 'index-html-plugin',
    transformIndexHtml(html) {
      return html
        .replace('</body>', `  <script type="module" src="/src/index.tsx"></script>\n</body>`)
        .replace(/%PUBLIC_URL%/g, ``)
        .replace(/%HOSTS%/g, JSON.stringify(hosts));
    },
  };
};
export default indexHtmlPlugin;
