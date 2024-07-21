let prevScrollPos2 = window.scrollY
const hideTopMenuOnScroll = (headerHeightValue, setTopValue) => {
    let currentScrollPos = window.scrollY

    prevScrollPos2 < currentScrollPos
        ?setTopValue(`-${headerHeightValue*1.5}px`)
        :setTopValue('0px')

    prevScrollPos2 = currentScrollPos
}

export default hideTopMenuOnScroll