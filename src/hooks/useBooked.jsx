import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useBooked = () => {
    const { user, loading } = useAuth();
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: booked = [] } = useQuery({
        queryKey: ['bookeds', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await  axiosSecure(`/bookeds?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [booked, refetch]

}
export default useBooked;