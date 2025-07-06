import { useDropdownToggle } from '../_hooks/useDropdowns';
import { introDropdowns } from '../_lists/lists';

export const Dropdowns = () => {
  const { expandedId, toggleDropdown } = useDropdownToggle();

  return (
    <main className="h-full">
      <section
        aria-labelledby="intro-header"
        className="flex flex-col gap-3 h-55"
      >
        <ul className="flex flex-col justify-start gap-5">
          {introDropdowns.map((dropdown) => (
            <li key={dropdown.id} className="border p-2">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl">{dropdown.title}</h3>
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
                    <div key={item.id}>
                      <p className="text-xl">{item.title}</p>
                      <p>{item.description}</p>
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
