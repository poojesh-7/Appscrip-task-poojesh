import Image from "next/image";

interface FilterButtonProps {
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
}

const FilterButton = ({ showFilter, setShowFilter }: FilterButtonProps) => {
  return (
    <div className="filter-button-wrapper">
      <Image className="hide_button_arr" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775613657/arrow_sobrxv.png" alt="arrow" width={20} height={20} style={{transform:"rotateZ(90deg)"}} /> 
      <button className="hide-filter" onClick={() => setShowFilter(!showFilter)}>         
          {showFilter ? "Hide Filters" : "Show Filters"}
          <hr style={{marginTop: "-2px"}}/>
      </button>
    </div>
  );
}

export default FilterButton;