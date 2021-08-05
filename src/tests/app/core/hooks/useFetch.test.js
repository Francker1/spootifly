import { renderHook } from '@testing-library/react-hooks';
import { useFetchData } from '../../../../app/core/hooks/useFetch';

describe('Test in hook useFetchData', () => {

   test('should return undefined if not token in data', async () => {
     const { result, waitForNextUpdate } = renderHook(() => useFetchData('token_invent'));
     const { data, loading } = result.current;

     await waitForNextUpdate();

     expect(data).toBe(undefined);
     expect(loading).toBe(undefined);
   });

})