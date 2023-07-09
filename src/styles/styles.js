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

    bgImage: `bg-image relative`,

    //toggle dark mode
    toggleDark: `bg-[#f4f6f8] dark:bg-[#121721]`,
    toggleMid: `bg-[#ffffff] dark:bg-[#19202d]`,
    textToggleGrey: `text-[#000000] dark:text-[#9daec2]`,
    textToggleWhite: `text-[#000000] dark:text-[#ffffff]`,
    secondaryBtnToggle: `text-[#5964e0] bg-[#f4f6f8] hover:bg-[#9daec2] dark:bg-[#6e8098] dark:text-[#ffffff]  dark:hover:bg-[#9daec2]`,
    toggleBorder: `border-[#f4f6f8] dark:border-[#9daec2]`,

    //buttons
    primaryButton: `bg-[#5964e0] py-2 px-5 text-[#ffffff] font-semibold rounded hover:bg-[#939bf4]`,
    secondaryButton: `py-2 px-5 font-semibold rounded`,

    //text
    textBox: `w-full focus:outline-none`,
    textBoxCont: `flex  items-center flex-grow`,

    centerItem: `flex  items-center justify-center`,

    wrapper: `w-4/5 mx-auto`,
    jobWrapper: `w-3/5 mx-auto`,

    absoluteTop: `absolute left-0 right-0`,

    //control grid
    contGrid: `grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1`,
};

export default styles;