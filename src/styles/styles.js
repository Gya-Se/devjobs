const styles = {
    // background colors
    violet: `bg-[#5964e0]`,
    white: `bg-[#ffffff]`,
    lightViolet: `bg-[#939bf4]`,
    lightGrey: `bg-[#f4f6f8]`,
    veryDarkBlue: `bg-[#19202d]`,
    grey: `bg-[#9daec2]`,
    midnight: `bg-[#121721]`,
    darkGrey: `bg-[#6e8098]`,

    //header image
    bgImage: `bg-image relative`,
    pageBarImage: `px-1 w-32 h-32 sm:h-[55px]  sm:w-[55px] rounded-l sm:rounded-lg sm:px-0:`,

    //toggle dark mode
    toggleDark: `bg-[#f4f6f8] dark:bg-[#121721]`,
    toggleMid: `bg-[#ffffff] dark:bg-[#19202d]`,
    textToggleGrey: `text-[#000000] dark:text-[#9daec2]`,
    textToggleWhite: `text-[#000000] dark:text-[#ffffff]`,
    secondaryBtnToggle: `text-[#5964e0] bg-[#f4f6f8] hover:bg-[#9daec2] dark:bg-[#939bf4] dark:text-[#ffffff] dark:hover:bg-[#9daec2] sm:dark:bg-[#1c2657] sm:dark:text-[#5964e0]`,
    toggleBorder: `border-[#f4f6f8] dark:border-[#9daec2]`,

    //buttons
    primaryButton: `bg-[#5964e0] py-2 px-5 text-[#ffffff] font-semibold rounded hover:bg-[#939bf4]`,
    secondaryButton: `py-2 px-5 font-semibold rounded`,

    //text
    textBox: `w-full focus:outline-none`,
    textBoxCont: `flex  items-center flex-grow`,

    //center an item
    centerItem: `flex  items-center justify-center`,
    smCenterItem: `sm:flex  sm:items-center sm:justify-center`,

    //page containers
    wrapper: `w-4/5 mx-auto`,
    smWrapper: `sm:w-4/5 sm:mx-auto`,
    jobWrapper: `w-3/5 mx-auto`,

    //absolute top
    absoluteTop: `absolute left-0 right-0`,

    //control grid
    contGrid: `grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1`,

    //apply now toggle
    applyToggle: `sm:flex-grow sm:w-full sm:mt-12`,

    //modall
    modal: `justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`,
    modalBox: `border-0 rounded-lg shadow-lg relative flex flex-col w-fulloutline-none focus:outline-none`,
};

export default styles;