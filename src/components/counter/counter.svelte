<script>
    let count = 0 ;
    let counter = 0;

    function incrementCount() {
        count += 1;
        counter += 1;
    }

    function decrementCount() {
        count -= 1;
        counter += 1;
    }

    $: console.log({count});

     
</script>

<p>The counter is now at : {count}</p>

<p>You press {counter} times my buttons</p>

<button on:click={incrementCount}> Add to count </button>
<button on:click={decrementCount}> Substract to count </button>

{#if count > 8 }
<p>I'm big</p>
{/if}