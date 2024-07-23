'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation';


export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    }
    else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
  }


  return (
    <fieldset>
      <label htmlFor='mountains'>
        <input
          type="radio" 
          id='mountains'
          value='mountains'
          name='category'
          onChange={(e) => handleSearch(e.target.value)}
        />
        Mountains
      </label>
      <label htmlFor='forests'>
        <input
          type="radio" 
          id='forests'
          value='forests'
          name='category'
          onChange={(e) => handleSearch(e.target.value)}
        />
        Forests
      </label>
      <label htmlFor='beaches'>
        <input
          type="radio" 
          id='beaches'
          value='beaches'
          name='category'
          onChange={(e) => handleSearch(e.target.value)}
        />
        Beaches
      </label>
      <label htmlFor='deserts'>
        <input
          type="radio" 
          id='deserts'
          value='deserts'
          name='category'
          onChange={(e) => handleSearch(e.target.value)}
        />
        Deserts
      </label>
    </fieldset>
  )
}