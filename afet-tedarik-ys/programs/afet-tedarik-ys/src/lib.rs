use anchor_lang::prelude::*;

declare_id!("3at4isQTJeciqLqTiLzN5ccGPRYTV9bLQazvzLjjzPce");

#[program]
pub mod afet_tedarik_ys {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
