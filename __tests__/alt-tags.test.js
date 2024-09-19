import { expect, test, vi } from 'vitest'
import { ArrayFiller } from '../app/lib/util'

test('ArrayFiller api call helper function returns images with an alt tag property', async () => {
  const getSpy = vi.fn(ArrayFiller)
  let images = await getSpy('Forests')

  images.forEach((image) => 
    expect(image).toHaveProperty('alt')
  )

  images = await getSpy('Deserts')
  images.forEach((image) => 
    expect(image).toHaveProperty('alt')
  )

  images = await getSpy('Beaches')
  images.forEach((image) => 
    expect(image).toHaveProperty('alt')
  )

  images = await getSpy('Mountains')
  images.forEach((image) => 
    expect(image).toHaveProperty('alt')
  )
})

// test('images include alt tags', () => {
//   const basket = {
//     varieties: [
//       {Empire: 'Roman'},
//       {Fuji: 'Apple'},
//       {Cherry: 'Pit'},
//     ],
//     count: 3
//   }
//   expect(basket).toEqual({
//     count: 3,
//     varieties: expect.arrayContaining(['Fuji'])
//   })
// })

// test('object contains an array of objects that have property `count`', () => {
//   const basket = {
//     varieties: [
//       {Empire: 'Roman', count: 1},
//       {Fuji: 'Apple', count: 2},
//       {Cherry: 'Pit', count: 3},
//     ],
//   }
//   basket.varieties.forEach( 
//     (item) => expect(item).toHaveProperty('count')
//   )
//   // basket.varieties.forEach((item) => 
//   //   expect(item).toEqual({ count: expect.any(Number) })
//   // )
// })

// test('array function resolved a value', async () => {
//   const getArraySpy = vi.fn(ArrayFiller)

//   const array = await getArraySpy('Mountains')

//   expect(getArraySpy).toHaveResolved()
// })



