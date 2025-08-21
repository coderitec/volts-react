export default function FormButton({data}) {
  return (
    <button type="submit" className="w-3/5 p-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">
        {data}
    </button>
  )
}