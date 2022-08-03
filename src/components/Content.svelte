<script>
    import { db } from "../db";

    import dayjs from "dayjs";
    const today = dayjs();
    let birthday = "";
    $: diffDays = today.diff(birthday, "day");
    $: co2PerDate = 740; //g
    $: heavy = (co2PerDate * diffDays) / 1000 / 1000; // t

    async function saveBirthday() {
        try {
            const id = await db.users.add({
                birthday: birthday,
            });
        } catch (error) {
            console.error(error);
        }
    }
</script>

<div>
    <label>
        <span>生年月日</span>
        <input
            type="date"
            bind:value={birthday}
            on:change={saveBirthday}
            name="birthday"
            autocomplete="bday"
        />
    </label>
    <p>{birthday}</p>
    <p>{heavy}トン</p>
</div>
