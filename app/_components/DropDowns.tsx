import { useDropdownToggle, useIconToggle } from '../_hooks/useDropdowns';
import { introDropdowns } from '../_lists/lists';

export const Dropdowns = () => {
  const { expandedId, toggleDropdown } = useDropdownToggle();

  const { activeId, toggleIcon } = useIconToggle();

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
                <span
                  onClick={() => {
                    toggleIcon(dropdown.id);
                  }}
                >
                  <i
                    className={`bi ${activeId === dropdown.id ? 'bi-chevron-up' : ' bi-chevron-down'} cursor-pointer text-4xl`}
                    onClick={() => toggleDropdown(dropdown.id)}
                    role="button"
                    aria-expanded={expandedId === dropdown.id}
                    aria-controls={`dropdown-panel-${dropdown.id}`}
                  />
                </span>
              </div>

              {expandedId === dropdown.id && (
                <div
                  id={`dropdown-panel-${dropdown.id}`}
                  className="border mt-2 p-2 flex flex-col gap-1 bg-foreground text-background"
                >
                  {dropdown.info?.map((item) => (
                    <div key={item.id} className="m-2">
                      <p className="text-2xl underline">{item.title}:</p>

                      <br />
                      <em>
                        <p className="text-xl">- {item.description}</p>
                      </em>
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
