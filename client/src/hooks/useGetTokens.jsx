import { useCookies } from 'react-cookie';

const useGetTokens = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies(['jwt-access']);
  return {
    headers: { Authorization: 'Bearer ' + cookies['jwt-access'] },
  };
};

export default useGetTokens;
