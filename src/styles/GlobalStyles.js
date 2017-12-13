import Fonts from './Fonts'
import Colors from './Colors'
import Spacing from './Spacing'

const GlobalStyles = {
  screen: {
    mainContainer: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: Spacing.baseMargin
    },
    section: {
      margin: Spacing.section,
      padding: Spacing.baseMargin
    },
  },
  text: {
    selectedDate: {
      fontSize: Fonts.size.h1,
      fontWeight: "bold",
      letterSpacing: -0.7,
      color: Colors.white
    },
    unselectedDate: {
      fontSize: Fonts.size.h1,
      fontWeight: "bold",
      letterSpacing: -0.7,
      color: Colors.coolGrey
    },
    restaurantsTitle: {
      fontSize: Fonts.size.h2,
      fontWeight: "500",
      letterSpacing: -0.48,
      color: Colors.white
    },
    input: {
      fontSize: Fonts.size.h3,
      fontWeight: "500",
      letterSpacing: -0.18,
      textAlign: "center",
      color: Colors.white
    },
    navbarTitle: {
      fontSize: Fonts.size.large,
      fontWeight: "500",
      textAlign: "center",
      color: Colors.gunmetal
    },
    signUpHeaderTitle: {
      fontSize: Fonts.size.large,
      fontWeight: "500",
      textAlign: "center",
      color: "#fefefe"
    },
    description: {
      fontSize: Fonts.size.largeish,
      fontWeight: "300",
      color: Colors.gunmetal
    },
    reservationsTitle: {
      fontSize: Fonts.size.medium,
      fontWeight: "600",
      letterSpacing: -0.35,
      color: Colors.gunmetal
    },
    buttonText: {
      fontSize: Fonts.size.medium,
      fontWeight: "600",
      letterSpacing: -0.14,
      textAlign: "center",
      color: Colors.white
    },
    headerSubtitle: {
      fontSize: Fonts.size.mediumish,
      textAlign: "right",
      color: Colors.gunmetal
    },
    reservationsButton: {
      fontSize: Fonts.size.mediumish,
      fontWeight: "500",
      textAlign: "center",
      color: Colors.white
    },
    restaurantsSubtitle: {
      fontSize: Fonts.size.mediumish,
      color: Colors.white50
    },
    filterGuestsSelected: {
      fontWeight: "bold",
      letterSpacing: -0.12,
      color: Colors.white
    },
    filterGuestsNotSelected: {
      fontWeight: "bold",
      letterSpacing: -0.12,
      color: Colors.coolGrey
    },
    filterTypeSelected: {
      fontSize: Fonts.size.regular,
      fontWeight: "600",
      letterSpacing: -0.12,
      textAlign: "center",
      color: Colors.white
    },
    signUpButton: {
      fontSize: Fonts.size.regular,
      fontWeight: "600",
      letterSpacing: -0.12,
      textAlign: "center",
      color: Colors.coral
    },
    filterTypeNotSelected: {
      fontSize: Fonts.size.regular,
      fontWeight: "600",
      letterSpacing: -0.12,
      textAlign: "center",
      color: Colors.coolGrey
    },
    subtitleCapitalized: {
      fontSize: Fonts.size.regular,
      fontWeight: "bold",
      letterSpacing: -0.24,
      color: Colors.gunmetal
    },
    filtersDateDay: {
      fontSize: Fonts.size.small,
      fontWeight: "500",
      color: Colors.white
    },
    filtersDateDayUnselected: {
      fontSize: Fonts.size.small,
      fontWeight: "500",
      color: Colors.coolGrey
    },
    dateText: {
      fontSize: Fonts.size.small,
      fontWeight: "600",
      letterSpacing: -0.28,
      textAlign: "center",
      color: Colors.gunmetal
    },
    reservationsSubtitle: {
      fontSize: Fonts.size.small,
      letterSpacing: -0.28,
      color: Colors.gunmetal50
    },
    reservationsSubtitle: {
      fontSize: Fonts.size.small,
      letterSpacing: -0.28,
      color: Colors.coolGrey
    }
  }
}

export default GlobalStyles