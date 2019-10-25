interface Props {
  title?: string;
}

export function Head({ title, ...props }: Props) {
  return (
    <head {...props}>
      <title>{title}</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1,  maximum-scale=1"
      />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon.png"
      />
      <meta name="theme-color" content="#ffffff" />

      <meta
        name="google-site-verification"
        content="M7pL_wSxEzCrDuOumMNWbZKW9gUPV88ICHQRWmdyhbc"
      />

      <meta
        name="description"
        content="Sean is a designer and front end engineer from Texas, currently residing in Brooklyn. Her pronouns are she and they."
      />
    </head>
  );
}
