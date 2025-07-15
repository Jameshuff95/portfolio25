import { useDropdownToggle, useIconToggle } from '../_hooks/useDropdowns';
import { introDropdowns } from '../_lists/lists';
import { DropdownProps } from '../_types/types';

export const Dropdowns = ({ className }: DropdownProps) => {
  const { expandedId, toggleDropdown } = useDropdownToggle();

  const { activeId, toggleIcon } = useIconToggle();

  return (
    <main className={`${className}`}>
      <section aria-labelledby="intro-header">
        <header>
          <h2 className="text-center text-4xl pb-5">
            What James is all about 👀👇
          </h2>
        </header>

        <ul className="flex flex-col gap-10 rounded-sm">
          {introDropdowns.map((dropdown) => (
            <li key={dropdown.id} className="p-2 border rounded-sm bg-gray-700">
              <div className="flex justify-between items-center px-4">
                <h3 className="text-4xl font-bold p-2">{dropdown.title}</h3>
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
                  className="border mt-2 p-2 flex flex-col gap-1 bg-foreground text-background rounded-sm"
                >
                  {dropdown.info?.map((item) => (
                    <div key={item.id} className="m-2">
                      <p className="text-xl underline">{item.title}:</p>
                      <br />
                      <em>
                        <p className="text-lg">- {item.description}</p>
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
