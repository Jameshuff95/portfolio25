const Portfolio = () => {
  return (
    <main>
      <section>
        <article>
          <header>
            <h1 className="text-3xl">Portfolio Page</h1>
          </header>
          <select className="border bg-foreground text-background  outline-none">
            <option id="1">Option 1</option>
            <option id="2">Option 2</option>
            <option id="3">Option 3</option>
          </select>
          <div className="border p-2"></div>
        </article>
      </section>
    </main>
  );
};

export default Portfolio;
