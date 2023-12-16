use sha2::{Digest, Sha256};
use anchor_lang::prelude::*;

declare_id!("C1en6tHavjHEEb7HtTKyiU8uuRqzVXVSTUWVR7RTmu1F");

#[program]
pub mod delivery_contract {
    use super::*;
    pub fn create_delivery(ctx: Context<CreateDelivery>, 
        packed_hash: String, 
        delivery_hash: String, 
        delivery_point: String, 
        vehicle_id: String) -> ProgramResult {
        let mut hasher = Sha256::new();

        // Verileri hashleyin
        hasher.update(packed_hash.as_bytes());
        let packed_hash_result = hasher.finalize_reset();

        hasher.update(delivery_hash.as_bytes());
        let delivery_hash_result = hasher.finalize_reset();

        hasher.update(delivery_point.as_bytes());
        let delivery_point_result = hasher.finalize_reset();

        hasher.update(vehicle_id.as_bytes());
        let vehicle_id_result = hasher.finalize();
        
        let delivery = &mut ctx.accounts.delivery;
        delivery.packed_hash = hex::encode(packed_hash_result);
        delivery.delivery_hash = hex::encode(delivery_hash_result);
        delivery.delivery_point = hex::encode(delivery_point_result);
        delivery.vehicle_id = hex::encode(vehicle_id_result);
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateDelivery<'info> {
    #[account(init, payer = user, space = 8 + 32 + 32 + 32 + 32)]
    pub delivery: Account<'info, Delivery>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Delivery {
    pub packed_hash: String,
    pub delivery_hash: String,
    pub delivery_point: String,
    pub vehicle_id: String,
}