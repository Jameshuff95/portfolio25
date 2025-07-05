import { useDropdownToggle } from '../_hooks/useDropdowns';
import { introDropdowns } from '../_lists/lists';

export const Dropdowns = () => {
  const { expandedId, toggleDropdown } = useDropdownToggle();

  return (
    <div className="h-4/6 flex flex-col justify-evenly gap-3">
      <h2 className="text-center text-3xl p-3">What James is all about 👀👇</h2>
      <ul className="flex flex-col justify-start gap-5 h-full">
        {introDropdowns.map((dropdown) => (
          <li key={dropdown.id} className="border p-2">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">{dropdown.title}</h3>
              <i
                className="bi bi-plus cursor-pointer text-4xl"
                onClick={() => toggleDropdown(dropdown.id)}
              />
            </div>

            {expandedId === dropdown.id && (
              <div className="border mt-2 p-2 flex flex-col gap-1 bg-foreground text-background">
                <p className="text-xl">{dropdown.info?.title}</p>
                <p>{dropdown.info?.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
