import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useInstructorClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/instructor?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [classes, refetch]

}
export default useInstructorClasses;