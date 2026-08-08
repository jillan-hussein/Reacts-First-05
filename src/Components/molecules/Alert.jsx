export default function Alert ({children}) {

    /**
     * children: string
     */

    return (
        <div 
        className="p-4 mx-5 shadow mb-2 bg-green-50 border-s-5 rounded-2xl  border-s-green-600">
            {children}
            </div>
    )
}