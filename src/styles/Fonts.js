const size = {
  h1: 28,
  h2: 24,
  h3: 18,
  large: 16,
  largeish: 15,
  medium: 14,
  mediumish: 13,  
  regular: 12,
  small: 11,
}

const style = {
  h1: {
    fontWeight: 'bold',
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'medium',
    fontSize: size.h2
  },
  h3: {
    fontWeight: 'medium',
    fontSize: size.large
  },
  h4: {
    fontWeight: 'semibold',
    fontSize: size.medium
  },
  h5: {
    fontSize: size.mediumish
  },
  h6: {
    fontWeight: 'medium',
    fontSize: size.regular
  },
  normal: {
    fontSize: size.regular
  },

}

export default {
  size,
  style
}
