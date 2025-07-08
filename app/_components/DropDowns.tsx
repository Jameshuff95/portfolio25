import { useDropdownToggle } from '../_hooks/useDropdowns';
import { introDropdowns } from '../_lists/lists';

export const Dropdowns = () => {
  const { expandedId, toggleDropdown } = useDropdownToggle();

  return (
    <main className="flex flex-col p-2">
      <section aria-labelledby="intro-header" className="flex flex-col gap-3">
        <header>
          <h2 className="text-center text-3xl p-3">
            What James is all about 👀👇
          </h2>
        </header>

        <ul className="flex flex-col justify-start gap-10">
          {introDropdowns.map((dropdown) => (
            <li key={dropdown.id} className="p-4 border rounded-sm bg-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl">{dropdown.title}</h3>
                <i
                  className="bi bi-plus cursor-pointer text-4xl"
                  onClick={() => toggleDropdown(dropdown.id)}
                  role="button"
                  aria-expanded={expandedId === dropdown.id}
                  aria-controls={`dropdown-panel-${dropdown.id}`}
                />
              </div>

              {expandedId === dropdown.id && (
                <div
                  id={`dropdown-panel-${dropdown.id}`}
                  className="border mt-2 p-2 flex flex-col gap-1 bg-foreground text-background"
                >
                  {dropdown.info?.map((item) => (
                    <div key={item.id} className="m-2">
                      <p className="text-2xl">{item.title}</p>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
