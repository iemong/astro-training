<script>
    import dayjs from "dayjs";
    const today = dayjs()
    let birthday = ''
    $: diffDays = today.diff(birthday, 'day')
    $: co2PerDate = 740 //g
    $: heavy = co2PerDate * diffDays / 1000 / 1000 // t
</script>

<div>
    <label>
        <span>生年月日</span>
        <input type="date" bind:value={birthday} name="birthday" autocomplete="bday" />
    </label>
    <p>{birthday}</p>
    <p>{heavy}トン</p>
</div>
