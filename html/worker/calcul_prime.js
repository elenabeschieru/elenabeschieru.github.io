function is_prime(n)
{
  for(var i = 2; i * i<=n; i++)
  { 
      if(n % i == 0)
        return true;

    return false;

  }
}

for(var i=1E9; i< 1E10; i++)

    if(is_prime(i))
    postMessage(i);

