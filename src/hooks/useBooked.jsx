import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useBooked = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: booked = [] } = useQuery({
        queryKey: ['bookeds', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookeds?email=${user?.email}`)
            console.log('res from axios', res)
            return res.json();
        },
    })

    return [booked, refetch]

}
export default useBooked;