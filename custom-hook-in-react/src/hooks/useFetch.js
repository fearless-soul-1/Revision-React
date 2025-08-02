import { useState, useEffect } from "react";

const useFetch = (url) => {
  // Initialize state variables for data, loading, and error
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an async function to fetch data
  const fetchData = async () => {
    try {
      // Make a fetch request to the given URL
      const response = await fetch(url);
      // Check if the response is not okay and throw an error
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convert response to JSON and update data state
      const result = await response.json();
      setData(result)
    }  // Set the error message in case of failure
    catch (err) {
      setError(err.message);
    } finally {
      // Ensure loading state is set to false after fetch
      setLoading(false)
    }
  }
  // Return the data, loading, and error states

  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

export default useFetch;
