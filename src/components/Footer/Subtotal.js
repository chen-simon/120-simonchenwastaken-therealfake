const getSubtotal = (option) => {
    return option.reduce((accum,item) => accum + item.price *item.quantity, 0)
  }

export default getSubtotal