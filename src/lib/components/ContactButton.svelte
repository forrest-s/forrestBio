<script>
  export let type;
  export let closeMenu;
</script>

<button
  class={`
    ${type === 'primary' ? 'bg-secondaryAccentColor' : ''}
    ${type === 'secondary' ? 'bg-secondaryColor' : ''}
    py-3 px-7 text-textColor rounded-full uppercase border-0 font-medium
  `}
  on:click={closeMenu}
>
  <a href={"#"}>Contact</a>
</button>
