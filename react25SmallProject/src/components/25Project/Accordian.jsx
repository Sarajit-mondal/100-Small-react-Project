import { useState } from "react";
import { accordian } from "../../utily/Accordian";

function Accordian() {
  const [singleSelect, setSingleSelect] = useState();
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  // handlesingleselect
  const handleSingleSelect = (selectId) => {
    setSingleSelect(selectId === singleSelect ? null : selectId);
  };

  //   handleMultiselector
  const handleMultiselector = (selectId) => {
    const copySelect = [...multiSelect];
    const isSelectedId = copySelect.indexOf(selectId);
    if (isSelectedId === -1) copySelect.push(selectId);
    else {
      copySelect.splice(isSelectedId, 1);
    }
    setMultiSelect(copySelect);
    console.log(copySelect);
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-10 lg:max-w-xl mx-auto">
        <div className="mx-auto">
          <button
            onClick={() => setEnableMultiSelect(!enableMultiSelect)}
            className=" inline rounded-xl btn"
          >
            Multiselector
          </button>
        </div>

        <div>
          {accordian &&
            accordian.map((item) => (
              <div className="my-8" key={item.id}>
                <h1
                  onClick={() =>
                    enableMultiSelect
                      ? handleMultiselector(item.id)
                      : handleSingleSelect(item.id)
                  }
                  className="flex justify-between gap-10 text-xl font-bold cursor-pointer"
                >
                  {item.title} <span> +</span>
                </h1>
                {/* multiselector */}
                {enableMultiSelect ? (
                  multiSelect.indexOf(item.id) !== -1 && (
                    <div>
                      <p>{item.description}</p>
                    </div>
                  )
                ) : singleSelect && singleSelect == item.id ? (
                  <div>
                    <p>{item.description}</p>
                  </div>
                ) : null}

                {/* singleSelect  */}
                {}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Accordian;
